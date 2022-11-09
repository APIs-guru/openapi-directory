import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Meta
/** 
 * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
 * 
**/
export class Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=msg" })
  msg?: string;

  @Metadata({ data: "json, name=response_id" })
  responseId?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
