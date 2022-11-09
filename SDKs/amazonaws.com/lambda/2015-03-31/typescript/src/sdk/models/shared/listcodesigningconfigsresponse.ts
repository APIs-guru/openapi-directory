import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeSigningConfig } from "./codesigningconfig";


export class ListCodeSigningConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSigningConfigs", elemType: shared.CodeSigningConfig })
  codeSigningConfigs?: CodeSigningConfig[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
