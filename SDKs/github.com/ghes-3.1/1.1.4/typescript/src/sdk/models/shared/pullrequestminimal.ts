import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PullRequestMinimalBaseRepo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestMinimalBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=repo" })
  repo: PullRequestMinimalBaseRepo;

  @Metadata({ data: "json, name=sha" })
  sha: string;
}


export class PullRequestMinimalHeadRepo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PullRequestMinimalHead extends SpeakeasyBase {
  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=repo" })
  repo: PullRequestMinimalHeadRepo;

  @Metadata({ data: "json, name=sha" })
  sha: string;
}


export class PullRequestMinimal extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base: PullRequestMinimalBase;

  @Metadata({ data: "json, name=head" })
  head: PullRequestMinimalHead;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=url" })
  url: string;
}
