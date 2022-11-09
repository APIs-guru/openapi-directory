import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessStatusEnum } from "./accessstatusenum";


export class GetAwsOrganizationsAccessStatusOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessStatus" })
  accessStatus?: AccessStatusEnum;
}
