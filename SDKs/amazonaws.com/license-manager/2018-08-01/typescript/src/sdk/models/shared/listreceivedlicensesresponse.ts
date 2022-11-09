import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrantedLicense } from "./grantedlicense";


export class ListReceivedLicensesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Licenses", elemType: shared.GrantedLicense })
  licenses?: GrantedLicense[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
