import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommandInvocation } from "./commandinvocation";


export class ListCommandInvocationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommandInvocations", elemType: shared.CommandInvocation })
  commandInvocations?: CommandInvocation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
