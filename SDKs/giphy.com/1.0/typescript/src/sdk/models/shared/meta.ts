import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Meta
/** 
 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
 * 
**/
export class Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "json, name=response_id" })
  responseId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
