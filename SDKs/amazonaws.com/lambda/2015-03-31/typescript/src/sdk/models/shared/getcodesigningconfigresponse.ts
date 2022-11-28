import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeSigningConfig } from "./codesigningconfig";



export class GetCodeSigningConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSigningConfig" })
  codeSigningConfig: CodeSigningConfig;
}
