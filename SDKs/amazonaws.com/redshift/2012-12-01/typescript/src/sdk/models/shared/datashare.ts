import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataShareAssociation } from "./datashareassociation";



export class DataShare extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowPubliclyAccessibleConsumers?: boolean;

  @SpeakeasyMetadata()
  dataShareArn?: string;

  @SpeakeasyMetadata({ elemType: DataShareAssociation })
  dataShareAssociations?: DataShareAssociation[];

  @SpeakeasyMetadata()
  producerArn?: string;
}
