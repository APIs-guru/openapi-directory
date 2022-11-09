import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponseSpecification } from "./responsespecification";
import { StillWaitingResponseSpecification } from "./stillwaitingresponsespecification";
import { ResponseSpecification } from "./responsespecification";


// WaitAndContinueSpecification
/** 
 * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. 
**/
export class WaitAndContinueSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=continueResponse" })
  continueResponse: ResponseSpecification;

  @Metadata({ data: "json, name=stillWaitingResponse" })
  stillWaitingResponse?: StillWaitingResponseSpecification;

  @Metadata({ data: "json, name=waitingResponse" })
  waitingResponse: ResponseSpecification;
}
