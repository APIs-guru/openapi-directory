import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkTypeDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
