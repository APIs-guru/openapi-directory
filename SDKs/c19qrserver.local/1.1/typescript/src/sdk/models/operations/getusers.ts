import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;

  @Metadata({ elemType: shared.UserRecord })
  userRecords?: shared.UserRecord[];
}
