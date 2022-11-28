import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkTypeUpdateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Title, form, name=Title;" })
  title?: string;
}
