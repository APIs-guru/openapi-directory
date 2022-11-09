import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCopyProductStatusInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=CopyProductToken" })
  copyProductToken: string;
}
