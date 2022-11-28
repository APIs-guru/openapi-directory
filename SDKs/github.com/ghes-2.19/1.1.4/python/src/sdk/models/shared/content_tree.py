from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ContentTreeLinks:
    git: str = field()
    html: str = field()
    self: str = field()
    

@dataclass
class ContentTreeEntriesLinks:
    git: str = field()
    html: str = field()
    self: str = field()
    

@dataclass
class ContentTreeEntries:
    links: ContentTreeEntriesLinks = field()
    download_url: str = field()
    git_url: str = field()
    html_url: str = field()
    name: str = field()
    path: str = field()
    sha: str = field()
    size: int = field()
    type: str = field()
    url: str = field()
    content: Optional[str] = field(default=None)
    

@dataclass
class ContentTree:
    r"""ContentTree
    Content Tree
    """
    
    links: ContentTreeLinks = field()
    download_url: str = field()
    git_url: str = field()
    html_url: str = field()
    name: str = field()
    path: str = field()
    sha: str = field()
    size: int = field()
    type: str = field()
    url: str = field()
    entries: Optional[List[ContentTreeEntries]] = field(default=None)
    
