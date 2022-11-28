import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCopyProductStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=CopyProductToken" })
  copyProductToken: string;
}
