import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiResponseFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
