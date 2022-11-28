import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LockEntity
/** 
 * List Locks by path
**/
export class LockEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_access_by_any_user" })
  allowAccessByAnyUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=depth" })
  depth?: string;

  @SpeakeasyMetadata({ data: "json, name=exclusive" })
  exclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
