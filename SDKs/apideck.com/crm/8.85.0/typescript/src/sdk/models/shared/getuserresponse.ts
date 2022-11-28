import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserOutput } from "./user";



export class GetUserResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UserOutput;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
