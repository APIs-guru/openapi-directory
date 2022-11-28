import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserRightsEnum } from "./userrightsenum";



export class MySqlUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: UserRightsEnum;
}
