import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamProcessor } from "./streamprocessor";


export class ListStreamProcessorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StreamProcessors", elemType: shared.StreamProcessor })
  streamProcessors?: StreamProcessor[];
}
