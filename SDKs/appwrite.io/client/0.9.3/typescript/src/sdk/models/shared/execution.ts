import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Execution
/** 
 * Execution
**/
export class Execution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode: number;

  @SpeakeasyMetadata({ data: "json, name=functionId" })
  functionId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=stderr" })
  stderr: string;

  @SpeakeasyMetadata({ data: "json, name=stdout" })
  stdout: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: number;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger: string;
}
