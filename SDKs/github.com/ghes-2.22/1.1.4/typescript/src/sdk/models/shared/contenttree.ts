import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentTreeLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  git: string;

  @SpeakeasyMetadata()
  html: string;

  @SpeakeasyMetadata()
  self: string;
}


export class ContentTreeEntriesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  git: string;

  @SpeakeasyMetadata()
  html: string;

  @SpeakeasyMetadata()
  self: string;
}


export class ContentTreeEntries extends SpeakeasyBase {
  @SpeakeasyMetadata()
  links: ContentTreeEntriesLinks;

  @SpeakeasyMetadata()
  content?: string;

  @SpeakeasyMetadata()
  downloadUrl: string;

  @SpeakeasyMetadata()
  gitUrl: string;

  @SpeakeasyMetadata()
  htmlUrl: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  path: string;

  @SpeakeasyMetadata()
  sha: string;

  @SpeakeasyMetadata()
  size: number;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  url: string;
}


// ContentTree
/** 
 * Content Tree
**/
export class ContentTree extends SpeakeasyBase {
  @SpeakeasyMetadata()
  links: ContentTreeLinks;

  @SpeakeasyMetadata()
  downloadUrl: string;

  @SpeakeasyMetadata({ elemType: ContentTreeEntries })
  entries?: ContentTreeEntries[];

  @SpeakeasyMetadata()
  gitUrl: string;

  @SpeakeasyMetadata()
  htmlUrl: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  path: string;

  @SpeakeasyMetadata()
  sha: string;

  @SpeakeasyMetadata()
  size: number;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  url: string;
}
