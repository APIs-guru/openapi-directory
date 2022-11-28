import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConstraintInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
