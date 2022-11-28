from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyEntitiesItemsDestinyItemRenderComponent:
    r"""DestinyEntitiesItemsDestinyItemRenderComponent
    Many items can be rendered in 3D. When you request this block, you will obtain the custom data needed to render this specific instance of the item.
    """
    
    art_regions: Optional[dict[str, int]] = field(default=None)
    use_custom_dyes: Optional[bool] = field(default=None)
    
