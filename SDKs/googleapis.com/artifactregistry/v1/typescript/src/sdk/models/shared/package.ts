import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Package
/** 
 * Packages are named collections of versions.
**/
export class Package extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
