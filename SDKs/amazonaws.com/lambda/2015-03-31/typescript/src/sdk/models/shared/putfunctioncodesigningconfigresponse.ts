import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutFunctionCodeSigningConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName: string;
}
