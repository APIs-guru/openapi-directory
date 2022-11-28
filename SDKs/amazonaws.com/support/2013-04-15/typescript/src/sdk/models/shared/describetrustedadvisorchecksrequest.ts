import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTrustedAdvisorChecksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;
}
