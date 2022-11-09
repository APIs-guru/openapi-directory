import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Execution
/** 
 * Execution
**/
export class Execution extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @Metadata({ data: "json, name=exitCode" })
  exitCode: number;

  @Metadata({ data: "json, name=functionId" })
  functionId: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=stderr" })
  stderr: string;

  @Metadata({ data: "json, name=stdout" })
  stdout: string;

  @Metadata({ data: "json, name=time" })
  time: number;

  @Metadata({ data: "json, name=trigger" })
  trigger: string;
}
