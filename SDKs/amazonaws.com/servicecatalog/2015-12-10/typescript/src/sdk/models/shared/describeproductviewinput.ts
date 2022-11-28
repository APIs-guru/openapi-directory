import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProductViewInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
