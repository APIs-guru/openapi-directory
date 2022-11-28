import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PullRequestMinimalBaseRepo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestMinimalBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo: PullRequestMinimalBaseRepo;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;
}


export class PullRequestMinimalHeadRepo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestMinimalHead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo: PullRequestMinimalHeadRepo;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;
}


export class PullRequestMinimal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base: PullRequestMinimalBase;

  @SpeakeasyMetadata({ data: "json, name=head" })
  head: PullRequestMinimalHead;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
