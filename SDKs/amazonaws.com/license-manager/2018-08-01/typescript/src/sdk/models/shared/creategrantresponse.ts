import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrantStatusEnum } from "./grantstatusenum";


export class CreateGrantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantArn" })
  grantArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: GrantStatusEnum;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
