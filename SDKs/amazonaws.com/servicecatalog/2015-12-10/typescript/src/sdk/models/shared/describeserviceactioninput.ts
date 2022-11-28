import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeServiceActionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
