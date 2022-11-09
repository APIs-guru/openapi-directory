import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FunctionConfiguration } from "./functionconfiguration";


export class ListVersionsByFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=Versions", elemType: shared.FunctionConfiguration })
  versions?: FunctionConfiguration[];
}
