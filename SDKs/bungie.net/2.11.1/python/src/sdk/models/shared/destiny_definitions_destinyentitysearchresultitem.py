from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties:
    r"""DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties
    Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
    """
    
    description: Optional[str] = field(default=None)
    has_icon: Optional[bool] = field(default=None)
    high_res_icon: Optional[str] = field(default=None)
    icon: Optional[str] = field(default=None)
    icon_sequences: Optional[List[DestinyDefinitionsCommonDestinyIconSequenceDefinition]] = field(default=None)
    name: Optional[str] = field(default=None)
    

@dataclass
class DestinyDefinitionsDestinyEntitySearchResultItem:
    r"""DestinyDefinitionsDestinyEntitySearchResultItem
    An individual Destiny Entity returned from the entity search.
    """
    
    display_properties: Optional[DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties] = field(default=None)
    entity_type: Optional[str] = field(default=None)
    hash: Optional[int] = field(default=None)
    weight: Optional[float] = field(default=None)
    
