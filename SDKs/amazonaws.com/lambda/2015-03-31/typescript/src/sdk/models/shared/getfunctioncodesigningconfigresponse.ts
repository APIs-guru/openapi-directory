import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFunctionCodeSigningConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName: string;
}
