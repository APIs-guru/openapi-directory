import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessStatusEnum } from "./accessstatusenum";



export class GetAwsOrganizationsAccessStatusOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessStatus" })
  accessStatus?: AccessStatusEnum;
}
