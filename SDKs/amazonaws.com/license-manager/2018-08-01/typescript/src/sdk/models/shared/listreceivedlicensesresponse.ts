import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrantedLicense } from "./grantedlicense";



export class ListReceivedLicensesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Licenses", elemType: GrantedLicense })
  licenses?: GrantedLicense[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
