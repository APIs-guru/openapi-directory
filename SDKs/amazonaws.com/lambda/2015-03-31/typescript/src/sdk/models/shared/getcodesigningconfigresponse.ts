import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeSigningConfig } from "./codesigningconfig";


export class GetCodeSigningConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSigningConfig" })
  codeSigningConfig: CodeSigningConfig;
}
