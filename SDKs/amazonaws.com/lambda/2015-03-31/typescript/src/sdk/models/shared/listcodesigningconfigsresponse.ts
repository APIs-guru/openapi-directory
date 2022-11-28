import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeSigningConfig } from "./codesigningconfig";



export class ListCodeSigningConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSigningConfigs", elemType: CodeSigningConfig })
  codeSigningConfigs?: CodeSigningConfig[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
