import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnprocessableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=type_name" })
  typeName?: string;
}
