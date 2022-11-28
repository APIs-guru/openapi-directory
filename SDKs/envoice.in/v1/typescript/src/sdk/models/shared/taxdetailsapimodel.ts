import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Percentage" })
  percentage?: number;
}
