import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseSpecification } from "./responsespecification";
import { StillWaitingResponseSpecification } from "./stillwaitingresponsespecification";



// WaitAndContinueSpecification
/** 
 * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. 
**/
export class WaitAndContinueSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=continueResponse" })
  continueResponse: ResponseSpecification;

  @SpeakeasyMetadata({ data: "json, name=stillWaitingResponse" })
  stillWaitingResponse?: StillWaitingResponseSpecification;

  @SpeakeasyMetadata({ data: "json, name=waitingResponse" })
  waitingResponse: ResponseSpecification;
}
