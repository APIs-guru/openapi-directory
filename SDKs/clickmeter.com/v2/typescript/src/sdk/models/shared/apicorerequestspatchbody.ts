import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreRequestsPatchBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action, form, name=Action;" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;
}
