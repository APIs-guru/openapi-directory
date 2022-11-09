import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeSigningConfig } from "./codesigningconfig";


export class CreateCodeSigningConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSigningConfig" })
  codeSigningConfig: CodeSigningConfig;
}
