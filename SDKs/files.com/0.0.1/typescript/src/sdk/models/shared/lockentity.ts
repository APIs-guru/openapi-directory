import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LockEntity
/** 
 * List Locks by path
**/
export class LockEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_access_by_any_user" })
  allowAccessByAnyUser?: boolean;

  @Metadata({ data: "json, name=depth" })
  depth?: string;

  @Metadata({ data: "json, name=exclusive" })
  exclusive?: boolean;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
