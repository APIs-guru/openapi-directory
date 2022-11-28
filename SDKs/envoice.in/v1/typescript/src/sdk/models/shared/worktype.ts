import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: number;
}
