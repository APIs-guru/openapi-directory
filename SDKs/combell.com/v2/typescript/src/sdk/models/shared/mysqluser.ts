import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserRightsEnum } from "./userrightsenum";


export class MySqlUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rights" })
  rights?: UserRightsEnum;
}
