import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommandInvocation } from "./commandinvocation";



export class ListCommandInvocationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommandInvocations", elemType: CommandInvocation })
  commandInvocations?: CommandInvocation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
