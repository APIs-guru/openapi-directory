import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineAttribute } from "./engineattribute";
import { NodeAssociationStatusEnum } from "./nodeassociationstatusenum";



export class DescribeNodeAssociationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngineAttributes", elemType: EngineAttribute })
  engineAttributes?: EngineAttribute[];

  @SpeakeasyMetadata({ data: "json, name=NodeAssociationStatus" })
  nodeAssociationStatus?: NodeAssociationStatusEnum;
}
