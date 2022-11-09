import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


export class GetUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: User;

  @Metadata({ data: "json, name=operation" })
  operation: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
