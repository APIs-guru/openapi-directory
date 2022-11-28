from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyDefinitionsDestinyEntitySearchResultResults:
    r"""DestinyDefinitionsDestinyEntitySearchResultResults
    The items found that are matches/near matches for the searched-for term, sorted by something vaguely resembling \"relevance\". Hopefully this will get better in the future.
    """
    
    has_more: Optional[bool] = field(default=None)
    query: Optional[QueriesPagedQuery] = field(default=None)
    replacement_continuation_token: Optional[str] = field(default=None)
    results: Optional[List[DestinyDefinitionsDestinyEntitySearchResultItem]] = field(default=None)
    total_results: Optional[int] = field(default=None)
    use_total_results: Optional[bool] = field(default=None)
    

@dataclass
class DestinyDefinitionsDestinyEntitySearchResult:
    r"""DestinyDefinitionsDestinyEntitySearchResult
    The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
    """
    
    results: Optional[DestinyDefinitionsDestinyEntitySearchResultResults] = field(default=None)
    suggested_words: Optional[List[str]] = field(default=None)
    
