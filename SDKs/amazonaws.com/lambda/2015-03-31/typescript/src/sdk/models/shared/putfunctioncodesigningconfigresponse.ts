import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutFunctionCodeSigningConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName: string;
}
